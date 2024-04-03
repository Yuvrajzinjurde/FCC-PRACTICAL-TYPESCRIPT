`TYPESCRIPT`

- `FUNDAMENTALS`

  - It is a superset of js.
  - all the javascript code is also a valid TS code

          Typescript File (.ts or .tsx)
          Annotations,Types,Generics             <-     Typescript Code

                      |
                      |

              Javascript Compiler                <-     COmpilation/Transpiling

                      |
                      |
              Javascript Code (.js)
                Runs Everywhere                  <-     Vanila Js Code

  - Typescript is a dev dependency.

- `VARIABLES`

  - If the datatype of the variable is `string` then only strings could be assign to it

- `ARRAYS`

  - WE can create arrays of defferent data types.
  - Values can not be assigned to the arrays of type empty array or object.

- `Interface - Fundamentals`

  - Allows to setup shape for objects (only objects)
  - Interfaces can have method defination in it as a property
  - We can also inherit multiple interfaces inside single interface and the use it.

- `INTERFACE VS TYPE ALIAS`

  - `TYPE ALIAS`

    - A type alias is a way to give a name to a type.It can represent premitive types, union types,intersection types, and any other types.Once defines, the alias can be used anything in place of the actual type

          ```ts
            - type person = {
              name:string;
              age:number;
            };


            let manav :person ={
              name:"manav",
              age:22
            };

  - `INTERFACES`

    - AN interface is a eay to define a contract for a certain structure of an object.

            ```ts
            interface person{
              name:string;
              age number;
            }

            let sam:person={
              name:"sam",
              age:30
            }

  - `KEY DIFFERENCES`
    - Type aliases can represent primitive types,union types,intersection types, tuples etc.., while interfaces are primariy used to represent the shape of an object.

- `REACT`
- `STORE`
