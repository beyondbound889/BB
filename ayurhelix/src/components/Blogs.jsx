import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'The Future of Glycomics in Rapid Diagnostics',
    excerpt: 'How sugar-based biomarkers are revolutionizing early detection without compromising safety.',
    link: 'https://yourdomain.com/blog/glycomics-diagnostics',
    tag: 'Innovation',
  },
  {
    title: 'Balancing Speed and Safety in Clinical Trials',
    excerpt: 'A strategic look at how modern trials are accelerating without cutting corners.',
    link: 'https://yourdomain.com/blog/speed-vs-safety',
    tag: 'Clinical Science',
  },
  {
    title: 'Designing Emotionally Resonant Healthcare Pages',
    excerpt: 'Why trust, clarity, and visual storytelling matter more than ever in digital health.',
    link: 'https://yourdomain.com/blog/emotional-design-healthcare',
    tag: 'Design Strategy',
  },
];

export default function Blogs() {
  return (
    <div className="px-6 py-12 text-[#216041]">
      <h2 className="text-3xl font-bold text-center text-[#216041] mb-10">
        Latest Insights & Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <span className="text-sm text-[#216041] font-medium mb-2 block">
              {blog.tag}
            </span>
            <h3 className="text-xl font-semibold text-[#216041] mb-3">
              {blog.title}
            </h3>
            <p className="text-[#216041] mb-4">{blog.excerpt}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}