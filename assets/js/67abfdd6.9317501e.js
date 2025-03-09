"use strict";(self.webpackChunkdsa_study_guide=self.webpackChunkdsa_study_guide||[]).push([[411],{2786:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>h,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"algorithms/dfs","title":"Depth-First Search","description":"Understanding depth-first search algorithm","source":"@site/docs/algorithms/dfs.mdx","sourceDirName":"algorithms","slug":"/algorithms/dfs","permalink":"/docs/algorithms/dfs","draft":false,"unlisted":false,"editUrl":"https://github.com/LuluBeatson/dsa-study-guide/tree/main/docs/algorithms/dfs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Depth-First Search","description":"Understanding depth-first search algorithm"},"sidebar":"tutorialSidebar","previous":{"title":"Binary Search","permalink":"/docs/algorithms/binary-search"},"next":{"title":"Breadth-First Search","permalink":"/docs/algorithms/bfs"}}');var a=n(4848),r=n(8453),i=n(5537),l=n(9329);n(8069);const h={sidebar_position:4,title:"Depth-First Search",description:"Understanding depth-first search algorithm"},d="Depth-First Search (DFS)",c={},o=[{value:"Implementation",id:"implementation",level:2}];function m(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"depth-first-search-dfs",children:"Depth-First Search (DFS)"})}),"\n",(0,a.jsx)(s.p,{children:"The depth-first search algorithm is used to traverse or search tree/graph data structures by exploring as far as possible along each branch before backtracking."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Time Complexity:"})," ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Space Complexity:"})," ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"O"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(h)"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where h is the height of the tree"]}),"\n",(0,a.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef dfs(node):\n    if not node:\n        return\n    # Process current node\n    print(node.val)  \n    # Recursively process left and right subtrees\n    dfs(node.left)\n    dfs(node.right)\n"})})}),(0,a.jsx)(l.A,{value:"go",label:"Golang",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-go",children:"type TreeNode struct {\n    Val int\n    Left *TreeNode\n    Right *TreeNode\n}\n\nfunc dfs(node *TreeNode) {\n    if node == nil {\n        return\n    }\n    // Process current node\n    fmt.Println(node.Val)\n    // Recursively process left and right subtrees\n    dfs(node.Left)\n    dfs(node.Right)\n}\n"})})})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);