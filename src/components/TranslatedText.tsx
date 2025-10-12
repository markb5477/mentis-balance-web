import React from 'react';

interface TranslatedTextProps {
  text: string;
  className?: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ text, className = "" }) => {
  // Function to parse text and make links clickable
  const parseTextWithLinks = (text: string) => {
    // Check if text already contains HTML anchor tags
    if (text.includes('<a href=')) {
      // If it contains HTML, render it directly with proper styling
      return <span dangerouslySetInnerHTML={{ __html: text.replace(/<a href=/g, '<a href=').replace(/<a href="([^"]*)"([^>]*)>/g, '<a href="$1"$2 class="text-blue-600 hover:text-blue-800 underline font-medium">') }} />;
    }
    
    // Regular expression to match "here/aqui/her/aqui" followed by a URL
    const linkRegex = /(here|aquí|her|aqui)\s*:\s*(https?:\/\/[^\s]+)/gi;
    
    // Regular expression to match website names (domain.com) that should be clickable
    const websiteRegex = /(på|en|on|at)\s+([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.[a-zA-Z]{2,})/gi;
    
    // First handle "here/aqui" patterns
    let processedText = text;
    const hereMatches = [...text.matchAll(linkRegex)];
    hereMatches.forEach(match => {
      const [fullMatch, linkWord, url] = match;
      const linkElement = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">${linkWord}</a>`;
      processedText = processedText.replace(fullMatch, linkElement);
    });
    
    // Then handle website name patterns
    const websiteMatches = [...processedText.matchAll(websiteRegex)];
    websiteMatches.forEach(match => {
      const [fullMatch, preposition, domain] = match;
      const linkElement = `${preposition} <a href="https://${domain}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">${domain}</a>`;
      processedText = processedText.replace(fullMatch, linkElement);
    });
    
    // Convert HTML string back to React elements
    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <span className={className}>
      {parseTextWithLinks(text)}
    </span>
  );
};

export default TranslatedText;
