import React, { useEffect, useRef } from "react";

const ItemsList = () => {
    const tableRef = useRef(null)
    const scroll = useRef(0)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    scroll.current = window.scrollY
    console.log('tableRef', tableRef)
    // tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' } )
    if (window.scrollY < 160) {
      tableRef.current?.scroll(0,scroll.current)
    } else if (window.scrollY > 160) {
      tableRef.current?.scroll(0,scroll.current + 100)
     }
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    > 
      <table cellspacing="0" cellpadding="0" class="scrollTable">
        <thead class="fixedHeader">
          <tr class="alternateRow">
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody class="scrollContent" ref={tableRef}>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>And Repeat 1</td>
            <td>And Repeat 2</td>
            <td>And Repeat 3</td>
          </tr>
          <tr class="normalRow">
            <td>Cell Content 1</td>
            <td>Cell Content 2</td>
            <td>Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>More Cell Content 1</td>
            <td>More Cell Content 2</td>
            <td>More Cell Content 3</td>
          </tr>
          <tr class="normalRow">
            <td>Even More Cell Content 1</td>
            <td>Even More Cell Content 2</td>
            <td>Even More Cell Content 3</td>
          </tr>
          <tr class="alternateRow">
            <td>End of Cell Content 1</td>
            <td>End of Cell Content 2</td>
            <td>End of Cell Content 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemsList;
