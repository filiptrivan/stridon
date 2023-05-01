import { GetServerSideProps } from 'next';
import { prisma } from '../../../server/db/client';
import { BlogCardType } from '..';
import BlogDetails from './components/BlogDetails';

interface Props {
  blogSlug: BlogCardType;
}



const BlogPage: React.FC<Props> = ({ blogSlug }) => {
  return (
    <div className='max-w-[1140px] mx-auto '>
      <BlogDetails blogData={blogSlug} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { slug } = context.params || {}; // add a default value of an empty object and destructure `slug` from it

  if (!slug) {
    return {
      notFound: true, // or redirect to a 404 page
    };
  }

  const blogSlug = await prisma.blog.findUnique({
    where: {
      slug: typeof slug === 'string' ? slug : slug[0], // check if `slug` is an array or a string and adjust accordingly
    },
    include:{
      vrsta:true
    }
  });

  if (!blogSlug) {
    return {
      notFound: true, // or redirect to a 404 page
    };
  }

  return {
    props: {
      blogSlug: JSON.parse(JSON.stringify(blogSlug)),
    },
  };
};

export default BlogPage;
