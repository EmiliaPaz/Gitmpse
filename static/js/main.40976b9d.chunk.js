(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,a,t){},164:function(e,a,t){e.exports=t(295)},290:function(e,a,t){},291:function(e,a,t){},293:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(34),l=t.n(o),i=t(37),c=t(43),u=t(20),s=t(150),m=t(147),d=t(149);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(135),v=t(136),g=t(151),f=t(137),p=t(152),b=t(35),h=t(36),w=t.n(h),y=t(104),S=t(30);function I(){var e=Object(b.a)(["\n    fragment repository on Repository {\n        id\n        name\n        url\n        descriptionHTML\n        primaryLanguage {\n            name\n        }\n        owner {\n            login\n            url\n        }\n        stargazers(first: 5) {\n            edges{\n                node {\n                    name\n                }\n            }\n            totalCount\n          }\n        viewerHasStarred\n        watchers {\n            totalCount\n        }\n        viewerSubscription\n        forkCount\n        createdAt\n        updatedAt\n        languages(\n            first: 5\n            orderBy: { direction: DESC, field: SIZE }\n        ){\n            edges {\n                node {\n                    id\n                    name\n                    color\n                }\n            }\n        }\n    }\n"]);return I=function(){return e},e}var O=w()(I()),C=t(153),j=function(e){var a=e.children,t=Object(C.a)(e,["children"]);return r.a.createElement("a",Object.assign({},t,{target:"_blank",rel:"noopener noreferrer"}),a)},R=t(305),k=t(296),z=t(301),A=t(307),N=t(304),$=t(302);t(106);function M(){var e=Object(b.a)(["\n    mutation($id: ID!) {\n        removeStar(input: {starrableId: $id}) {\n            starrable {\n                id\n                viewerHasStarred\n            }\n        }\n    }\n"]);return M=function(){return e},e}function x(){var e=Object(b.a)(["\n    mutation($id: ID!) {\n        addStar(input: {starrableId: $id}) {\n            starrable {\n                id\n                viewerHasStarred\n            }\n        }\n    }\n"]);return x=function(){return e},e}var D=w()(x()),H=w()(M()),L=function(e,a){var t=a.data.addStar.starrable.id,n=e.readFragment({id:"Repository:".concat(t),fragment:O}),r=n.stargazers.totalCount+1;e.writeFragment({id:"Repository: ".concat(t),fragment:O,data:Object(S.a)({},n,{stargazers:Object(S.a)({},n.stargazers,{totalCount:r})})})},F=function(e,a){var t=a.data.removeStar.starrable.id,n=e.readFragment({id:"Repository:".concat(t),fragment:O}),r=n.stargazers.totalCount-1;e.writeFragment({id:"Repository: ".concat(t),fragment:O,data:Object(S.a)({},n,{stargazers:Object(S.a)({},n.stargazers,{totalCount:r})})})},P=function(e){var a=e.id,t=e.name,n=e.url,o=(e.descriptionHTML,e.primaryLanguage,e.owner),l=e.stargazers,c=(e.watchers,e.viewerSubscription,e.viewerHasStarred),u=e.forkCount,s=e.createdAt,m=e.updatedAt,d=e.languages;return r.a.createElement("div",null,r.a.createElement("div",{className:"RepositoryItem-title"},r.a.createElement(R.a,{as:"h2",textAlign:"center"},r.a.createElement(j,{href:n},t),c?r.a.createElement(i.b,{mutation:H,variables:{id:a}},function(e,a){return a.data,a.loading,a.error,r.a.createElement(k.a,{className:"RepositoryItem-button",onClick:e,update:F,circular:!0,size:"mini",color:"red"},"Unstar")}):r.a.createElement(i.b,{mutation:D,variables:{id:a}},function(e,a){return a.data,a.loading,a.error,r.a.createElement(k.a,{className:"RepositoryItem-button",onClick:e,update:L,circular:!0,size:"mini",color:"yellow"},"Star")})),r.a.createElement(z.a,{className:"RepositoryItem-information"},r.a.createElement(A.a,{columns:2,relaxed:"very"},r.a.createElement(A.a.Column,null,r.a.createElement("h3",null,"Details"),r.a.createElement(N.a,{as:"ol"},r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null,"Owner: "),"  ",r.a.createElement("a",{href:o.url},o.login)),r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null," Date created: ")," ",s),r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null," Date last update: ")," ",m),r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null," Languages: "),r.a.createElement(N.a.Item,{as:"ol"},d.edges.map(function(e){var a=e.node;return r.a.createElement(N.a.Item,{as:"li",value:"+"},a.name)}))))),r.a.createElement(A.a.Column,null,r.a.createElement("h3",null,"Stats"),r.a.createElement(N.a,{as:"ol"},r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null," Fork count: ")," ",u),r.a.createElement(N.a.Item,{as:"li",value:"-"},r.a.createElement("h4",null," Stars count: ")," ",l.totalCount,l.totalCount>0?r.a.createElement(N.a.Item,{as:"ol"},l.edges.map(function(e){var a=e.node;return r.a.createElement(N.a.Item,{as:"li",value:"+"},a.name)})):r.a.createElement("p",null))))),r.a.createElement($.a,{vertical:!0}))))},B=function(){return r.a.createElement("div",null,"Loading ...")},G=t(308),U=function(e,a){var t=a.fetchMoreResult;return t?Object(S.a)({},e,{viewer:Object(S.a)({},e.viewer,{repositories:Object(S.a)({},e.viewer.repositories,t.viewer.repositories,{edges:[].concat(Object(y.a)(e.viewer.repositories.edges),Object(y.a)(t.viewer.repositories.edges))})})}):e},q=function(e){var a=e.repositories,t=e.loading,o=e.fetchMore;return r.a.createElement(n.Fragment,null,r.a.createElement(z.a,null,r.a.createElement(G.a.Group,{raised:!0},a.edges.map(function(e){var a=e.node;return r.a.createElement(G.a,{color:"olive"},r.a.createElement("div",{key:a.id,className:"RepositoryItem"},r.a.createElement(P,a)))})),t?r.a.createElement(B,null):a.pageInfo.hasNextPage&&r.a.createElement(k.a,{inverted:!0,color:"olive",type:"button",onClick:function(){return o({variables:{cursor:a.pageInfo.endCursor},updateQuery:U})}},"More Repositories")))},T=(t(290),function(e){var a=e.error;return r.a.createElement("div",{className:"ErrorMessage"},r.a.createElement("small",null,a.toString()))});function J(){var e=Object(b.a)(["\n    query($username: String!, $cursor: String){\n        user(login: $username) {\n            repositories(\n                first: 5\n                orderBy: { direction: DESC, field: STARGAZERS }\n                after: $cursor\n            ) {\n                edges {\n                    node {\n                        ...repository\n                    }\n                }\n                pageInfo {\n                    endCursor\n                    hasNextPage\n                }\n            }\n        }\n    }\n  ","\n"]);return J=function(){return e},e}var Q=w()(J(),O),W=function(e){var a=e.username;return r.a.createElement(i.c,{query:Q,variables:{username:a},notifyOnNetworkStatusChange:!0},function(e){var a=e.data,t=e.loading,n=e.error,o=e.fetchMore;if(n)return r.a.createElement(T,{error:n});var l=a.user;return t&&!l?r.a.createElement(B,null):r.a.createElement(q,{repositories:l.repositories,fetchMore:o})})},Z=(t(291),function(){return r.a.createElement("div",null,r.a.createElement(z.a,null,r.a.createElement(R.a,{as:"h1",color:"olive"},"Gitmpse",r.a.createElement(R.a.Subheader,null," A GitHub repositories glimpse"))))}),V=t(303),_=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={username:"EmiliaPaz"},t.onUsernameSubmit=function(e,a){t.setState({username:a.value})},t}return Object(p.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.state.username;return r.a.createElement("div",null,r.a.createElement(A.a,{columns:1},r.a.createElement(A.a.Row,null,r.a.createElement(z.a,{textAlign:"center"},r.a.createElement(Z,null))),r.a.createElement(A.a.Row,null,r.a.createElement(z.a,{textAlign:"center"},r.a.createElement(V.a,{action:{color:"olive",labelPosition:"left",icon:"user",content:"Username"},actionPosition:"left",placeholder:"...",defaultValue:"EmiliaPaz",size:"small",onChange:this.onUsernameSubmit}))),r.a.createElement(A.a.Row,null,r.a.createElement(W,{username:e}))))}}]),a}(n.Component),K=(t(292),t(293),new s.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer ".concat("828b319e07cd31d7016d73ac88d4ef962a2d7645")}})),X=new d.a,Y=Object(m.a)(function(e){e.graphQLErrors,e.networkError}),ee=u.a.from([Y,K]),ae=new c.a({link:ee,cache:X});l.a.render(r.a.createElement(i.a,{client:ae},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,1,2]]]);
//# sourceMappingURL=main.40976b9d.chunk.js.map