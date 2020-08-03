import React, {useState} from 'react';

const languages = (props) => {
    // List of Web Development Languages

    const webDevList = [{
            language: 'HTML',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
        },{
            language: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
        },{
            language: 'React (Native)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        }
    ].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    // List of Object Oriented Languages
    const oopList = [{
        language: 'Python',
        image: 'https://www.python.org/static/opengraph-icon-200x200.png'
    },{
        language: 'Java',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
    },{
        language: '',
        image: ''
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    const databaseList = [{
        language: 'MongoDB',
        image: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png'
    },{
        language: 'SQL',
        image: 'https://image.flaticon.com/icons/svg/29/29594.svg'
    },{
        language: '',
        image: ''
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentList, setCurrentList] = useState(databaseList);

    return (
        <>
            <h3>Knowledgable Areas</h3>
            <div>
                <button onClick={()=>setCurrentList(webDevList)}>Web Development</button>
                <button onClick={()=>setCurrentList(oopList)}>OOPs</button>
                <button onClick={()=>setCurrentList(databaseList)}>Databases</button>
            </div>
            <ul style={{listStyle: "none"}}>{currentList}</ul>
        </>
    );
};

export default languages;