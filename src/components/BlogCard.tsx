import { Link } from "lucide-react";

interface BlogPost {
  title: string;
  contentSnippet: string;
  link: string;
  pubDate: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article
      className="bg-non rounded-xl shadow-sm border border-blue-500 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-sm text-gray-100 font-medium">
            {formatDate(post.pubDate)}
          </span>
          <div className="w-5 h-5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-gray-200 mb-4 line-clamp-3 leading-relaxed italic">
          {post.contentSnippet}
        </p>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:gap-3"
        >
          Read more
          <Link size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;