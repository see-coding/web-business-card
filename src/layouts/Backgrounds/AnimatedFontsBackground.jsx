import React, { useEffect } from 'react';
import './animatedfontsbackground.css';

function AnimatedFontsBackground() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery && !mediaQuery.matches) {
      const tagScroller = document.querySelector(".tag-scroller");
      if (!tagScroller) return;
      const allTags = tagScroller.querySelectorAll("li");

      function createElement(tagName, className = "") {
        const elem = document.createElement(tagName);
        elem.className = className;
        return elem;
      }

      function scrollersFrom(elements, numColumns = 6) {
        const fragment = new DocumentFragment();
        elements.forEach((element, i) => {
          const column = i % numColumns;
          const children = fragment.children;
          if (!children[column]) fragment.appendChild(createElement("ul", "tag-list"));
          children[column].appendChild(element);
        });
        return fragment;
      }

      const scrollers = scrollersFrom(allTags, 6);
      tagScroller.innerHTML = "";
      tagScroller.appendChild(scrollers);
      addScrolling();

      function addScrolling() {
        tagScroller.classList.add("scrolling");
        document.querySelectorAll(".tag-list").forEach((tagList) => {
          const scrollContent = Array.from(tagList.children);
          scrollContent.forEach((listItem) => {
            const clonedItem = listItem.cloneNode(true);
            clonedItem.setAttribute("aria-hidden", true);
            tagList.appendChild(clonedItem);
          });
          tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
        });
      }
    }
  }, []);

  return (
    <>
      <div className="tag-scrollers" aria-hidden="true">
        <div className="tag-scroller">
          <ul className="tag-list">
            <li>Websites</li>
            <li>Coding</li>
            <li>Marketing</li>
            <li>UI</li>
            <li>CMS</li>
            <li>UX</li>
            <li>AppDevelopment</li>
            <li>Webservices</li>
            <li>SEO / SEM</li>
            <li>Printservice</li>
            <li>Online / Digital</li>
            <li>Web Analytics</li>
            <li>Merchandising</li>
            <li>Brand Identity</li>
            <li>Full Stack Development</li>
            <li>Product Design</li>
            <li>Amazon Web Services</li>
            <li>Offline / Print</li>
            <li>GrafikDesign</li>
            <li>Textilveredelung</li>
            <li>POS</li>
            <li>Support</li>
            <li>eCommerce</li>
            <li>Motion Graphics</li>
            <li>OOH / DOOH</li>
            <li>Full Service Marketing</li>
            <li>Campaign Development</li>
            <li>Consulting</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AnimatedFontsBackground;
