import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Time from '../components/Time';
import Title from '../components/Title';
import Link from '../components/Link';

const StyledPost = styled.div`
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogIndex = ({data}) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <div>
      <main>
        <Helmet title={siteTitle} />
        {posts.map(({node}) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;

          return (
            <StyledPost key={node.fields.slug}>
              <Title level='3'>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
              <Time>{node.frontmatter.date}</Time>
              <p dangerouslySetInnerHTML={{__html: node.frontmatter.description}} />
            </StyledPost>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title,
            description
          }
        }
      }
    }
  }
`;
