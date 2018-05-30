import React from 'react'
import ArticleList from './ArticleList'
import articles from '../blockinevents'
import '../index.css'

function App(){
    return (
        <div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App