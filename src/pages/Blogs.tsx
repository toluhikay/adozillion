import React from "react";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const Blogs = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center lg:px-[89px] md:px-[30px] px-[15px] py-24 items-center">
        <h1 className="text-yellow-600 sm:text-3xl text-2xl mb-12 font-medium text-center">
          📝 Our Blog Is Coming Soon! 📝
        </h1>
        <p className="text-center text-lg font-light">
          Exciting news awaits! We are delighted to announce that our brand-new
          blog is just around the corner. Prepare yourself for an immersive
          experience where knowledge, inspiration, and entertainment converge.
          <br />
          <br />
          Our team of passionate writers, industry experts, and thought leaders
          have been working tirelessly to create a platform that caters to your
          interests. From insightful articles to engaging stories, our blog will
          cover a wide range of topics that will captivate your curiosity and
          expand your horizons.
          <br />
          <br />
          Stay tuned for a wealth of valuable content, including informative
          guides, practical tips, thought-provoking analyses, and much more.
          Whether you're seeking expert advice, exploring the latest trends, or
          simply looking for some inspiration, our blog will be your go-to
          destination.
          <br />
          <br />
          We can't wait to share this exciting journey with you! Be sure to
          bookmark our website and follow us on social media to be the first to
          know when our blog goes live. Get ready to embark on a transformative
          experience that will enrich your mind and ignite your imagination.
          <br />
          <br />
          Prepare to dive into a world of captivating stories and insightful
          knowledge. Our blog is coming soon, and we can't wait to have you as
          part of our vibrant community!
          <br />
          <br />
          Stay tuned and get ready for an extraordinary blogging adventure!
        </p>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Blogs;
