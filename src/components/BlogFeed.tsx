import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import { Rss } from 'lucide-react';
import Newsletter from '../assets/ui/Newsletter';


interface BlogPost {
  title: string;
  contentSnippet: string;
  link: string;
  pubDate: string;
}

interface BlogFeedProps {
  substackUrl?: string;
  maxPosts?: number;
}

const BlogFeed = ({
  substackUrl = "https://nebiyutefera.substack.com/feed",
  maxPosts = 8
}: BlogFeedProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('Fetching RSS feed from:', substackUrl);

        // Use CORS proxy to fetch the RSS feed
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(substackUrl)}`;
        const response = await axios.get(proxyUrl);

        console.log('RSS response received');

        // Parse the RSS feed using DOMParser (browser-compatible)
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data.contents, 'text/xml');

        // Check for parsing errors
        const parserError = xmlDoc.querySelector('parsererror');
        if (parserError) {
          throw new Error('Failed to parse RSS feed');
        }

        console.log('RSS feed parsed successfully');

        // Extract items from the RSS feed
        const items = Array.from(xmlDoc.querySelectorAll('item')).slice(0, maxPosts);

        console.log('RSS feed parsed, total items:', items.length);

        // Transform the items to our post format
        const transformedPosts: BlogPost[] = items.map(item => {
          const title = item.querySelector('title')?.textContent || 'Untitled Post';
          const link = item.querySelector('link')?.textContent || '#';
          const pubDate = item.querySelector('pubDate')?.textContent || new Date().toISOString();

          // Get description or content for snippet
          const description = item.querySelector('description')?.textContent || '';
          const content = item.querySelector('content')?.textContent || '';

          let contentSnippet = description || content || 'No preview available';

          // Remove HTML tags and limit length
          contentSnippet = contentSnippet.replace(/<[^>]*>/g, '').trim();
          if (contentSnippet.length > 120) {
            contentSnippet = contentSnippet.substring(0, 120) + '...';
          }

          return {
            title,
            contentSnippet,
            link,
            pubDate
          };
        });

        console.log('Transformed posts:', transformedPosts.length);
        setPosts(transformedPosts);
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [substackUrl, maxPosts]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 animate-pulse">
            <Rss className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Latest Posts</h2>
          <p className="text-gray-600">Fetching the newest content for you...</p>
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Rss className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Posts</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Rss className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Latest Blog Posts</h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          Discover the newest insights and stories from my featured Substack publications
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={`${post.link}-${index}`} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found.</p>
        </div>
      )}

      {/* Newsletter Section */}
      <Newsletter />

    </div>
  );
};

export default BlogFeed;
