"use strict";(self.webpackChunkdsa_study_guide=self.webpackChunkdsa_study_guide||[]).push([[115],{8106:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"algorithms/bfs","title":"Breadth-First Search","description":"Understanding breadth-first search algorithm","source":"@site/docs/algorithms/bfs.mdx","sourceDirName":"algorithms","slug":"/algorithms/bfs","permalink":"/docs/algorithms/bfs","draft":false,"unlisted":false,"editUrl":"https://github.com/LuluBeatson/dsa-study-guide/tree/main/docs/algorithms/bfs.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Breadth-First Search","description":"Understanding breadth-first search algorithm"},"sidebar":"tutorialSidebar","previous":{"title":"Depth-First Search","permalink":"/docs/algorithms/dfs"},"next":{"title":"Dynamic Programming","permalink":"/docs/algorithms/dynamic-programming"}}');var a=s(4848),r=s(8453),i=s(5537),l=s(9329);s(8069);const d={sidebar_position:5,title:"Breadth-First Search",description:"Understanding breadth-first search algorithm"},o="Breadth-First Search (BFS)",h={},c=[{value:"Implementation",id:"implementation",level:2}];function m(e){const n={annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"breadth-first-search-bfs",children:"Breadth-First Search (BFS)"})}),"\n",(0,a.jsx)(n.p,{children:"The breadth-first search algorithm is used to traverse or search tree/graph data structures by exploring all nodes at the present depth before moving on to nodes at the next depth level."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Time Complexity:"})," ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Space Complexity:"})," ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"w"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(w)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where w is the maximum width of the tree"]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef bfs(root):\n    if not root:\n        return\n    queue = deque([root])\n    while queue:\n        node = queue.popleft()\n        # Process current node\n        print(node.val)\n        # Add children to queue\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n"})})}),(0,a.jsx)(l.A,{value:"go",label:"Golang",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"type TreeNode struct {\n    Val int\n    Left *TreeNode\n    Right *TreeNode\n}\n\nfunc bfs(root *TreeNode) {\n    if root == nil {\n        return\n    }\n    queue := []*TreeNode{root}\n    for len(queue) > 0 {\n        // Process current node\n        node := queue[0]\n        queue = queue[1:]\n        fmt.Println(node.Val)\n        // Add children to queue\n        if node.Left != nil {\n            queue = append(queue, node.Left)\n        }\n        if node.Right != nil {\n            queue = append(queue, node.Right)\n        }\n    }\n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);