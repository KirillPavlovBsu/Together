import React, {Component} from 'react'

class Article extends Component {
    render() {
        const {article} = this.props
        console.log('---',this.props)
        return (
            <div class="block">
                <div class="unit">{article.meal} {article.name}</div>
                <div class="unit">{article.restaurant}</div>
                <div class="unit">{article.comments}</div>
            </div>
    )}
}

export default Article