import React, { useState } from "react";

import {
    TreeView,
    TreeViewExpandChangeEvent,
    TreeViewCheckChangeEvent,
    TreeViewItemClickEvent,
    processTreeViewItems,
    handleTreeViewCheckChange,
  } from "@progress/kendo-react-treeview";
import { boolean } from "yup";
  
  interface TreeViewDataItem {
    text: string;
    expanded?: boolean;
    checked?: boolean;
    selected?: boolean;
    items?: TreeViewDataItem[];
  }
  
  const tree: TreeViewDataItem[] = [
    {
      text: "개발팀",
      items: [
        { text: "직원1" },
        { text: "직원2" },
        { text: "직원3" },
      ],
    },
    {
      text: "사무팀",
      items: [
        { text: "직원1" },
        { text: "직원2" },
        { text: "직원3" },
      ],
    },
  ];
  
  export default function TreeViewitem(){
    const [check, setCheck] = useState<any | null>([]);
    const [expand, setExpand] = useState({
      ids: ["Item2"],
      idField: "text",
    });
    const [select, setSelect] = useState([""]);
    const onItemClick = (event: TreeViewItemClickEvent) => {
      setSelect([event.itemHierarchicalIndex]);
    };
    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
      let ids = expand.ids.slice();
      const index = ids.indexOf(event.item.text);
  
      index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
      setExpand({ ids, idField: "text" });
    };
    const onCheckChange = (event: TreeViewCheckChangeEvent) => {
      const settings = {
        singleMode: false,
        checkChildren: false,
        checkParents: false,
      };
      setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };
    return (
      <TreeView
        data={processTreeViewItems(tree, {
          select: select,
          check: check,
          expand: expand,
        })}
        expandIcons={true}
        onExpandChange={onExpandChange}
        aria-multiselectable={true}
        onItemClick={onItemClick}
        checkboxes={true}
        onCheckChange={onCheckChange}
      />
    );
  };