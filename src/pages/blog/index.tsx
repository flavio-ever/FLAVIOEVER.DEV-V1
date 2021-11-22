import Link from 'next/link'
import BlogTemplate from '../../templates/Blog'

function Blog() {
  return <BlogTemplate />
}

// function Posts() {
//   return (
//     <ul>
//       {[
//         { id: '123', title: 'Olá, mundo!', slug: 'ola-mundo' },
//         { id: '1234', title: 'Olá, mundo 2!', slug: 'ola-mundo-2' }
//       ].map((post: any) => (
//         <li key={post.id}>
//           <Link
//             href={{
//               pathname: 'blog/[slug]',
//               query: { slug: post.slug }
//             }}
//           >
//             <a>{post.title}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

export default Blog
