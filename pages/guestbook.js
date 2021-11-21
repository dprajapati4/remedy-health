import Link from 'next/link';
export default function Guestbook() {
  return (
    <div>
      <h1>This is the Feed</h1>
      <Link href="/">
        <a>Make a new post</a>
      </Link>
    </div>
  );
}
