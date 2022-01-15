import React from "react";

const TextHighlighter = (props) => {
  if (typeof toLowerCase !== "undefined" && typeof indexOf !== "undefined") {
    const { title, extract, includes } = props;
    const titleTemp = title.toLowerCase();
    const titleStart = titleTemp.indexOf(includes.toLowerCase());
    const titleEnd = titleStart + includes.length;
    const titleItem = title.slice(titleStart, titleEnd);
    const titleRes = title.replace(
      titleItem,
      `<span class="highLight">${titleItem}</span>`
    );
    const extractTemp = extract.toLowerCase();
    const extractStart = extractTemp.indexOf(includes.toLowerCase());
    const extractEnd = extractStart + includes.length;
    const extractItem = extract.slice(extractStart, extractEnd);
    const extractRes = extract.replace(
      extractItem,
      `<span class="highLight">${extractItem}</span>`
    );
  }
  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: titleRes }} />
      <br />
      <span dangerouslySetInnerHTML={{ __html: extractRes }} />
    </div>
  );
};

export default TextHighlighter;
