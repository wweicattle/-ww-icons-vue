ts 不断回溯之前写过的代码,一直优化,写出更加合适的类型体操.
它是一个不断搜索,不断实践出来的.
学习ts 首先你应该学习基本类型的定义.
我们长话段说
# 基本类型
我们知道在js中基本类型包括string,boolean,number,symbol ,undefined

## extends 
一般用来做类型的约束,也可用在class类中
extends 我们一般在函数中可以见到,函数的传参中,

type enu = 'a'|'b' ,'str',[]
          
type Ext = T extends enu ?'1':'2'
其中xxx是 类型,可以是对象 ☑️{name:11}=>{name:number,age?:string}
☑️11=>11  ☑️联合类型'str'=> 'str'|'name'|'age'  ☑️数组[1,2]=> [1,2]

const demo1: Ext<'a'> = '1'


## 实现一个includes 
从联合类型T中排除U的类型成员，来构造一个新的类型。
实现 MyExclude,
type MyExclude<T extends any[], P> = { [P in T[number]]: true }[P] extends true ? true : false
理解:{ [P in T[number]]: true }[P] 判断是否该属性存在,存在设置true,之后在取该值,判断是否存在


## infer是啥
模式匹配 infer

## 类型装饰器


## in
in 用于取联合类型的值,主要用于数组和对象的构造.

## keyof 
接受一个对象的类型key作为参数,返回该对象属性名组成的字面量联合类型.



## 需要将结果类型展开
有时我们移入鼠标,却没有展示对象的具体类型,我们则需要加入 Omit<对象,never>
https://github.com/type-challenges/type-challenges/issues/5395




## 高级类型的使用

### 交叉类型 

### 联合类型 


## class类中的使用

## any unknow never 傻傻分不清楚
首先我们应该知道的是:
any: 被定义为any的类型,可以赋值给任意的类型,TypeScript实际会关闭这个变量的检查.
我们应该尽量避免使用any类型,否则失去使用ts的意义.

比any更加安全的类型,使用的时候需要进行类型守卫

unknow: 为了解决any类型“污染”其他变量的问题,TypeScript 3.0 引入了unknown类型.
所以也表示类型不确定,与any含义相同,但它的使用是有一些限制,可以称为严格版的any.使用unknow 需要类型缩小,即将一个不确定类型缩小为更明确的类型.

const v1 :unknown = 123
将v1赋值为其他变量类型,需要进行类型缩小,它只可以使用比较运算符（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错.
总之,unknow可以看作更安全的any.
never:运用在类型的运算中,保证完整性,函数不可能的返回值,都可以写成never.
对类型的完整性判断,函数中无返回值

## TS 中的数组

## TS 中的断言
类型断言形式两种
1.<Type> value
2. value as type

使用断言:

## TS 中的函数

基本写法:
const fns: (str: string) => void = function (str){
  console.log(str)
}
函数的实际参数个数,可以少于类型定义的参数的个数,但是不能多于
type MyFunc = (txt:string) => void;
let myFunc: (a:number, b:number) => number; 
两个形参,报错

Function: 任意函数的类型,它的参数接受任何数量的参数,类型都是any,返回值的类型也是any
never: 函数中绝对不会返回的值,常用在 throw new Error()超出错误. 按道理一个函数返回的类型默认是拥有| never类型,可能会抛出的错误.

## TS 中的对象


