interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({ title, description, keywords, url, ogImage, ogType = "website" }: SEOProps) {
  // Update document title
  if (typeof document !== "undefined") {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
    
    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }
    
    // Update canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    
    // Update Open Graph tags
    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:url", url);
    updateOGTag("og:type", ogType);
    if (ogImage) {
      updateOGTag("og:image", ogImage);
    }
  }
  
  return null;
}

function updateOGTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}