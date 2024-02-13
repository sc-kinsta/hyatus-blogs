export type BlogPost = {
  metadata: {
    tags: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    internalName: string;
    seoFields: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    slug: string;
    author: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    publishedDate: string;
    title: string;
    shortDescription: string;
    featuredImage: {
      metadata: {
        tags: string[];
      };
      sys: {
        space: {
          sys: {
            type: string;
            linkType: string;
            id: string;
          };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: {
            id: string;
            type: string;
            linkType: string;
          };
        };
        revision: number;
        locale: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
          fileName: string;
          contentType: string;
        };
      };
    };
    content: {
      data: {};
      content: {
        data: {};
        content: {
          data: {};
          marks: [];
          value: string;
          nodeType: string;
        }[];
        nodeType: string;
      }[];
      nodeType: string;
    };
  };
};
