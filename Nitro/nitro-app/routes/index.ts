export default eventHandler((event) => {


const {code, instructions} = event.context.params;


//actually do something useful here





  return { result: 'Hi, my name is EduBot!' ,
operationID: 'dosomethinguseful'}
})
