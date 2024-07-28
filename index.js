// @ts-ignore
// function sum(num1: number, num2: number): number {
//     return num1 + num2
// }
// console.log(sum(4,6));
// @ts-ignore
// let myFavNum: number = NaN
// console.log(myFavNum);
// let bigNumber:bigint=9007199254740992n;
// console.log(bigNumber)
// default parameter and optinal parameter in ts
// const data = (name:string,id:number=4):string => {       (Here default parameter)
//   return welcome ${name} and your assign id is ${id}
// }
// const store = data("jay");
// console.log(store)
// const data2 = (name:string,id?:number):string => {     (Here optinal parameter)
//    if(id){
//     return welcome ${name} and your assign id is ${id}
//    }else{
//     return welcome ${name} finally
//    }
//   }
//   const store = data2("jayesh");
//   const store2 = data2("jayesh",41);
//   console.log(store)
//   console.log(store2)
// const arrays1:number[] = [1,2,3,4,5]
// console.log(arrays1.length);
// const arrays2:number[] = new Array(1,2,3,4)
// const arrays3:string[] = Array.of("AAA","BBB","cccc");
// Alias Alias  Alias means work on object same repeated that stop
// type Product = {
//     name: string;
//     price: number;
//     quantity: number;
// }
// const product:Product = {
//     name: "laptop",
//     price: 800,
//     quantity: 3
// }
// const multi =(product:Product)=>{
//     return ` product name ${product.name} total is ${product.price * product.quantity}`
// }
// console.log(multi(product))
// enum work array code = [code1,code2]
// tuple means like working on array
// type PersonInfo = [string, number, boolean](readonly for push data in array);
// type PersonInfo = readonly [string, number, boolean]
// const personData = (para: PersonInfo) => {
//     const [name, age, hasdata] = para
//     console.log(` 1.${name} 2.${age} 3.${hasdata ? "Yes" : "No"}`);
// }
// const arr1: PersonInfo = ["vishal", 24, true]
// const arr2: PersonInfo = ["jayesh", 23, false]
// arr2.push("jayesh");
// console.log(arr2);
// personData(arr1);
// personData(arr2);
// (reason behind using Generics because union using then are string | number | boolean dugmug that use Generics)
// Generics in Typescript (Multiple Type Variables using) ((Generics is all about resuble component))
function logAndReturn(value) {
    return value;
}
// const result1 = logAndReturn<number>(43);
// const result2 = logAndReturn<string>("Hello world");
// const result3 = logAndReturn<boolean>(true);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// 1.
// function add<T,U>(a:T,b:U){
//   console.log(typeof a)
//   console.log(typeof b)
// }
// const result1 = add<number,string>(4,"Hello");
// const result2 = add("Hello world",true);
// const result3 = add<number,number>(7,10);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// 2.
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
var result1 = add(4, "Hello", true);
var result2 = add("Hello world", 10, false);
console.log(result1);
console.log(result2);
// function add<T,U,V>(a:T,b:U,c:V){
//   console.log(typeof a)
//   console.log(typeof b)
//   console.log(typeof c)
// }
// const result1 = add<number,string,boolean>(4,"Hello",true);
// const result2 = add("Hello world",10,false);
// console.log(result1);
// console.log(result2);
// function add<T, U, V>(a: T, b: U, c: V) {
//   console.log(typeof a);
//   console.log(typeof b);
//   console.log(typeof c);
// }
// const result1 = add<number, string, boolean>(4, "Hello", true);
// const result2 = add("Hello world", 10, false);
// console.log(result1);
// console.log(result2);
// | (|) union type in ts 
// tsc -w
// include exclude 
// in ts array of object  [{},{},{},{}] then type are in ts typeListProps ={
//   names:{
//       first:string
//       last:string
//   }[]
// }
// in ts  object {} then type are typeListProps ={
// const personName ={
//   first:"jay",
//   last:"mehta"
// }
// below typescript
//   names:{
//       first:string
//       last:string
//   }
// }
// all key are same 
// onClick :
// type butttonProps ={
//   handleClick :(event:React.MouseEvent<HTMLButtonElement>)=>void
// }
// onChange :
// type inputProps ={
//   handleClick :(event:React.changeEvent<HTMLInputElement>)=>void
// }
// +++
// type valueUsers ={
//   name:string,
//   email:string,
// }
// const [user, setUser] = useState<valueUsers | null>(null);
// setUser({name:"hello1",email:"email@gmail.com"})
// get accesss values 
// {user?.name}  and {user?.email}
