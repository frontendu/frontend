import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Footer from '../components/Footer';
import Time from '../components/Time';

const PostTemplate = ({data}) => {
  const post = data.markdownRemark;
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
      <main>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <Time>{post.frontmatter.date}</Time>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </main>
      <Footer />
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;