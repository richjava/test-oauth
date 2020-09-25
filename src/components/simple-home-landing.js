import Link from 'next/link';

const SimpleHomeLanding = () => {
  return (
    <section className="shl">
     <p>Here is a blurb for the Home page landing section that will come from the CMS.</p>
     <Link href="/contact">
        <a>Get in touch</a>
      </Link>
      <style jsx>{``}</style>
    </section>
  );
};

export default SimpleHomeLanding;
