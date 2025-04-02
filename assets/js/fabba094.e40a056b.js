"use strict";(self.webpackChunkdsa_study_guide=self.webpackChunkdsa_study_guide||[]).push([[536],{9327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"language-guides/typescript","title":"TypeScript","description":"TypeScript quick reference guide","source":"@site/docs/language-guides/typescript.mdx","sourceDirName":"language-guides","slug":"/language-guides/typescript","permalink":"/docs/language-guides/typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/LuluBeatson/dsa-study-guide/edit/main/docs/language-guides/typescript.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"TypeScript","description":"TypeScript quick reference guide"},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript","permalink":"/docs/language-guides/javascript"},"next":{"title":"Bookmarks","permalink":"/docs/bookmarks"}}');var i=s(4848),r=s(8453),a=s(5537),c=s(9329);const l={sidebar_position:2,title:"TypeScript",description:"TypeScript quick reference guide"},o="TypeScript",d={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Package Management",id:"package-management",level:3},{value:"Run File",id:"run-file",level:3},{value:"<code>node</code> with manual compilation",id:"node-with-manual-compilation",level:4},{value:"<code>ts-node</code> (No manual compilation)",id:"ts-node-no-manual-compilation",level:4},{value:"Type System",id:"type-system",level:2},{value:"Basic Types",id:"basic-types",level:3},{value:"Enums",id:"enums",level:3},{value:"Interfaces &amp; Types",id:"interfaces--types",level:3},{value:"Generics",id:"generics",level:3},{value:"Using Types",id:"using-types",level:2},{value:"Functions",id:"functions",level:3},{value:"Classes",id:"classes",level:3},{value:"Web Application Specifics",id:"web-application-specifics",level:2},{value:"DOM Manipulation",id:"dom-manipulation",level:3},{value:"Async/Await",id:"asyncawait",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"TypeScript in React",id:"typescript-in-react",level:2},{value:"TypeScript vs Python",id:"typescript-vs-python",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"typescript",children:"TypeScript"})}),"\n",(0,i.jsxs)(n.p,{children:["See also ",(0,i.jsx)(n.a,{href:"/docs/language-guides/javascript",children:"JavaScript"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["Inside a ",(0,i.jsx)(n.a,{href:"/docs/language-guides/javascript",children:"JavaScript"})," project:"]}),"\n",(0,i.jsx)(n.h3,{id:"package-management",children:"Package Management"}),"\n",(0,i.jsxs)(n.p,{children:["You often need to install type information as a separate dependency.\nUse ",(0,i.jsx)(n.code,{children:"-D"})," or ",(0,i.jsx)(n.code,{children:"--save-dev"})," to install it as a dev dependency because it's\nnot needed at runtime."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add lodash\npnpm add -D @types/lodash\n"})}),"\n",(0,i.jsx)(n.h3,{id:"run-file",children:"Run File"}),"\n",(0,i.jsxs)(n.h4,{id:"node-with-manual-compilation",children:[(0,i.jsx)(n.code,{children:"node"})," with manual compilation"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Install TypeScript as a dev dependency\npnpm add -D typescript\n\n# Create a tsconfig.json file\nnpx tsc --init\n\n# Manual compilation and run\nnpx tsc myfile.ts && node myfile.js\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"ts-node-no-manual-compilation",children:[(0,i.jsx)(n.code,{children:"ts-node"})," (No manual compilation)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add -D ts-node\n\n# Run a TS file directly\nts-node myfile.ts\n"})}),"\n",(0,i.jsx)(n.h2,{id:"type-system",children:"Type System"}),"\n",(0,i.jsx)(n.h3,{id:"basic-types",children:"Basic Types"}),"\n",(0,i.jsx)(n.p,{children:"Type annotations use a colon just like Python"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'let name: string = "John";\nlet age: number = 30;\nlet isActive: boolean = true;\nlet items: string[] = ["item1", "item2"];\n\n// Tuple type (fixed length, defined types)\nlet tuple: [string, number] = ["id", 123];\n\n// Avoid `any` type when possible\nlet anyType: any = "anything";\n'})}),"\n",(0,i.jsx)(n.p,{children:"TypeScript can infer types - no need to always annotate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'let inferred = "John";  // TypeScript knows this is a string\nlet numbers = [1, 2, 3];  // TypeScript knows this is number[]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"enums",children:"Enums"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Similar to Python enums\nenum Role {\n  User = "USER",\n  Admin = "ADMIN",\n  Guest = "GUEST"\n}\n\nlet userRole: Role = Role.Admin;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"interfaces--types",children:"Interfaces & Types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// Interface - defines shape of an object\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  isAdmin?: boolean;  // Optional property\n  readonly createdAt: Date;  // Can\'t be modified after creation\n}\n\n// Use the interface\nconst user: User = {\n  id: 1,\n  name: "John",\n  email: "john@example.com",\n  createdAt: new Date()\n};\n\n// Type aliases - alternative to interfaces\ntype Point = {\n  x: number;\n  y: number;\n};\n\n// Union types (similar to Python\'s Union)\ntype ID = string | number;\nlet userId: ID = "abc123";\nuserId = 456;  // Also valid\n'})}),"\n",(0,i.jsx)(n.h3,{id:"generics",children:"Generics"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(c.A,{value:"typescript",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// No need to import TypeVar\n\n// The instance of T is created within the signature\n\nfunction getFirst<T>(array: T[]): T | undefined {\n  return array[0];\n}\n\nconst first = getFirst<string>(["a", "b", "c"]);  // Type: string\nconst firstNum = getFirst([1, 2, 3]);  // Type inferred: number\n'})})}),(0,i.jsx)(c.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from typing import TypeVar\n\nT = TypeVar(\'T\')  # Must create a TypeVar instance\n\ndef get_first(array: list[T]) -> T | None:\n    return array[0] if array else None\n\n\nfirst = get_first(["a", "b", "c"])  # Type: string\nfirstNum = get_first([1, 2, 3])  # Type: int\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"using-types",children:"Using Types"}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Parameter and return type annotations\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\n// Arrow functions\nconst multiply = (a: number, b: number): number => a * b;\n\n// Optional parameters with ?\nfunction logMessage(message: string, userId?: string): void {\n  // userId is optional\n  console.log(message, userId || 'anonymous');\n}\n\n// Default parameters\nfunction createUser(name: string, role: string = \"user\"): object {\n  return { name, role };\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"classes",children:"Classes"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(c.A,{value:"typescript",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"class Person {\n    // Class properties with access modifiers\n    private id: number;  // Can only be accessed within the class\n    public name: string;  // Can be accessed anywhere\n    protected age: number;  // Can be accessed within the class and subclasses\n    \n    // Constructor\n    constructor(id: number, name: string, age: number) {\n        this.id = id;\n        this.name = name;\n        this.age = age;\n    }\n    \n    // Methods\n    greet(): string {\n        return `Hello, I'm ${this.name}`;\n    }\n}\n\n// Inheritance\nclass Employee extends Person {\n    department: string;  // default public\n    \n    constructor(id: number, name: string, age: number, department: string) {\n        super(id, name, age);  // Call parent constructor\n        this.department = department;\n    }\n}\n"})})}),(0,i.jsx)(c.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Person:\n    # Python doesn\'t have access modifiers, but has "_" conventions\n    __id: int  # "private"\n    name: str  # "public"\n    _age: int  # "protected"\n\n    # Constructor\n    def __init__(self, id: int, name: str, age: int):\n        self.__id = id\n        self.name = name\n        self._age = age\n\n\n    # Methods\n    def greet(self):\n        return f"Hello, I\'m {self.name}"\n\n\n\n# Inheritance\nclass Employee(Person):\n    department: str  # "public"\n\n    def __init__(self, id: int, name: str, age: int, department: str):\n        super().__init__(id, name, age)  # Call parent constructor\n        self.department = department\n\n\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"web-application-specifics",children:"Web Application Specifics"}),"\n",(0,i.jsx)(n.h3,{id:"dom-manipulation",children:"DOM Manipulation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Type assertions when working with DOM\nconst button = document.getElementById('submit') as HTMLButtonElement;\n// Or with angle bracket syntax (not used in JSX)\nconst input = <HTMLInputElement>document.getElementById('username');\n\n// Event listeners with proper types\nbutton.addEventListener('click', (event: MouseEvent) => {\n  event.preventDefault();\n  console.log(input.value);\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"asyncawait",children:"Async/Await"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Promises and async/await (similar to Python)\nasync function fetchUser(id: string): Promise<User> {\n  const response = await fetch(`/api/users/${id}`);\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  return await response.json() as User;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'try {\n  const user = await fetchUser("123");\n  console.log(user);\n} catch (error) {\n  // Type narrowing with instanceof\n  if (error instanceof Error) {\n    console.error(error.message);\n  } else {\n    console.error("Unknown error:", error);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"typescript-in-react",children:"TypeScript in React"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Function component with props interface\ninterface GreetingProps {\n  name: string;\n  count?: number;\n}\n\nfunction Greeting({ name, count = 0 }: GreetingProps) {\n  return <h1>Hello {name}, visited {count} times</h1>;\n}\n\n// Hooks with types\nconst [users, setUsers] = useState<User[]>([]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"typescript-vs-python",children:"TypeScript vs Python"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Static Typing"}),": TypeScript checks types at compile time, not runtime"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Block Scope"}),": Variables are scoped to blocks with ",(0,i.jsx)(n.code,{children:"let"})," and ",(0,i.jsx)(n.code,{children:"const"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Prototypal Inheritance"}),": Different OOP model than Python's class-based inheritance"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous Code"}),": Uses Promises/async-await (similar to Python but with different syntax)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compilation"}),": TypeScript compiles to JavaScript"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);