import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Time from '../components/Time';

const StyledH3 = styled.h3`
  margin-bottom: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  box-shadow: none;
`;

const StyledPost = styled.div`
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <main>
          <Helmet title={siteTitle} />
          {posts.map(({node}) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;

            return (
              <StyledPost key={node.fields.slug}>
                <StyledH3>
                  <StyledLink to={node.fields.slug}>
                    {title}
                  </StyledLink>
                </StyledH3>
                <Time>{node.frontmatter.date}</Time>
                <p dangerouslySetInnerHTML={{__html: node.frontmatter.description}} />
              </StyledPost>
            );
          })}
        </main>
        <Footer />
      </div>
    );
  }
}

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
