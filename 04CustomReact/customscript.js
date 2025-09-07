const mainContainer= document.querySelector('#root')

function CustomReact(ReactElement,container) {
    /*const domElement=document.createElement(ReactElement.type)
    domElement.setAttribute("href",ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)
    domElement.innerHTML=ReactElement.children
    container.appendChild(domElement)*/
    const domElement=document.createElement(ReactElement.type)
    domElement.setAttribute("href",ReactElement.props.href)
    for (const prop in ReactElement.props) {
        if(prop==='children') continue
        domElement.setAttribute(prop,ReactElement.props[prop])
    }
    domElement.innerHTML=ReactElement.children
    container.appendChild(domElement)
    
}

const ReactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:"Click me to visit google"
}

CustomReact(ReactElement,mainContainer)