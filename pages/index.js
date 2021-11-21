import Link from 'next/link';
export default () => (
  <div>
    <Link href="/guestbook">
      <a>See all Posts!</a>
    </Link>

    <form name="guestform">
      <label htmlFor="name"> Name: </label>
      <input type="text" id="name" name="name" placeholder="Name" /> <br />
      <label htmlFor="message"> Message: </label>
      <textarea
        name="message"
        form="guestform"
        placeholder="Enter message here"
      ></textarea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);
