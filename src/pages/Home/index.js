import React from "react";
import { Route, Switch } from "react-router-dom";
import { TabBar } from "antd-mobile";
import House from "./House";
import Index from "./Index/index";
import News from "./News";
import Profile from "./Profile";
import NoMatch from "../NoMatch";
import "./index.scss";
const tab = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home"
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/house"
  },
  {
    title: "资讯",
    icon: "icon-infom",
    path: "/home/news"
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/profile"
  }
];
class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/profile" component={Profile} />
          <Route component={NoMatch}></Route>
        </Switch>
        <div className="tabBar">
          <TabBar
            unselectedTintColor="#888"
            tintColor="#21b97a"
            barTintColor="white"
          >
            {tab.map(item => (
              <TabBar.Item
                title={item.title}
                key={item.title}
                icon={<span className={`iconfont ${item.icon}`}></span>}
                selectedIcon={<span className={`iconfont ${item.icon}`}></span>}
                selected={this.state.selectedTab === item.path}
                // 点击事件
                onPress={() => {
                  this.setState({
                    selectedTab: item.path
                  });
                  // 跳转路由
                  this.props.history.push(item.path);
                }}
                data-seed="logId"
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}

export default Home;
