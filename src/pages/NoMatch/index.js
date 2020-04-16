import React from "react";
import { Link } from "react-router-dom";
class NoMatch extends React.Component {
  render() {
    return (
      <div>
        您访问的页面不存在，返回<Link to='/home'>首页</Link>
      </div>
    );
  }
}

export default NoMatch;
