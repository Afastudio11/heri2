import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

const mockPosts: BlogPost[] = [
  {
    id: '1',
    category: '3D Design',
    title: 'Follow Our Projects and Get Inspired on Social Media',
    author: 'Kevin Mcgill',
    date: '28 August 2024',
    readTime: '8 Min',
    imageUrl: 'https://picsum.photos/600/400?random=101'
  },
  {
    id: '2',
    category: 'Architecture',
    title: 'How Our Social Media Brings Projects to Life',
    author: 'Sarah Jenkins',
    date: '28 August 2024',
    readTime: '8 Min',
    imageUrl: 'https://picsum.photos/600/400?random=102'
  },
  {
    id: '3',
    category: 'Interior',
    title: 'Minimalist Trends in 2024 You Need to Know',
    author: 'Kevin Mcgill',
    date: '25 August 2024',
    readTime: '5 Min',
    imageUrl: 'https://picsum.photos/600/400?random=103'
  },
  {
    id: '4',
    category: 'Construction',
    title: 'Sustainable Building Materials for Future Homes',
    author: 'Mike Ross',
    date: '20 August 2024',
    readTime: '12 Min',
    imageUrl: 'https://picsum.photos/600/400?random=104'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Insights <br/> Design</h2>
                <p className="text-slate-500 max-w-lg">
                    Stay informed with our blog, where we share tips, industry trends, and the latest innovations in construction, 3D design, and interior design.
                </p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
                View All <ArrowRight size={16} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-3xl overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                    </div>
                    
                    <div className="px-2">
                        <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                            <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                            <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 hover:text-blue-600 cursor-pointer">
                            {post.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-4 border-t border-slate-100 pt-4">
                            <img src={`https://picsum.photos/50/50?random=${post.id}`} alt={post.author} className="w-8 h-8 rounded-full" />
                            <div className="text-sm">
                                <span className="text-slate-400">Written By</span>
                                <p className="font-semibold text-slate-900">{post.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;