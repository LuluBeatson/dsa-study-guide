"use strict";(self.webpackChunkdsa_study_guide=self.webpackChunkdsa_study_guide||[]).push([[828],{3136:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"data-structures/arrays","title":"Arrays","description":"Understanding array data structures and operations","source":"@site/docs/data-structures/arrays.mdx","sourceDirName":"data-structures","slug":"/data-structures/arrays","permalink":"/docs/data-structures/arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/LuluBeatson/dsa-study-guide/tree/main/docs/data-structures/arrays.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Arrays","description":"Understanding array data structures and operations"},"sidebar":"tutorialSidebar","previous":{"title":"Data Structures","permalink":"/docs/category/data-structures"},"next":{"title":"Linked Lists","permalink":"/docs/data-structures/linked-lists"}}');var a=t(4848),s=t(8453),i=t(5537),d=t(9329),l=t(8069);const o="# Initialize an array\narr = [1, 2, 3, 4, 5]\n\n# Access element\nfirst = arr[0]\n\n# Modify element\narr[0] = 10\n\n# Add element to end\narr.append(6)\n\n# Remove last element\narr.pop()\n",c="// Initialize an array\nconst arr: number[] = [1, 2, 3, 4, 5];\n\n// Access element\nconst first: number = arr[0];\n\n// Modify element\narr[0] = 10;\n\n// Add element to end\narr.push(6);\n\n// Remove last element\narr.pop();",u='package main\n\nimport "fmt"\n\nfunc arrayOperations() []int {\n\t// Initialize an array\n\tarr := []int{1, 2, 3, 4, 5}\n\n\t// Access element\n\tfirst := arr[0]\n\tfmt.Println("First element:", first)\n\n\t// Modify element\n\tarr[0] = 10\n\n\t// Add element to end\n\tarr = append(arr, 6)\n\n\t// Remove last element\n\tarr = arr[:len(arr)-1]\n\n\treturn arr\n}\n',p={sidebar_position:1,title:"Arrays",description:"Understanding array data structures and operations"},m="Arrays",y={},h=[{value:"Implementation",id:"implementation",level:2}];function f(e){const r={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"arrays",children:"Arrays"})}),"\n",(0,a.jsx)(r.p,{children:"Arrays are contiguous blocks of memory that store elements of the same type."}),"\n",(0,a.jsx)(r.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(d.A,{value:"py",label:"Python",children:(0,a.jsx)(l.A,{language:"python",children:o})}),(0,a.jsx)(d.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(l.A,{language:"typescript",children:c})}),(0,a.jsx)(d.A,{value:"go",label:"Golang",children:(0,a.jsx)(l.A,{language:"go",children:u})})]})]})}function g(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);