import React, { useState, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./themes/globalStyle";
import { Wrapper, Header, Main, Sidebar, MainContent } from "./themes/themeOne";
import MenuSidebar from "./components/MenuSidebar";
import { IconMenu } from "./themes/IconMenu";
import { Normalize } from "styled-normalize";
import { routes } from "./routes/router";

const App: FC = () => {
	const [isSidebar, setIsSidebar] = useState(true);

	return (
		<Wrapper>
			<Router>
				<Header>
					<IconMenu setissidebar={setIsSidebar} issidebar={isSidebar} />
					<p>
						<Switch>
							{routes.map((r) => {
								return <Route key={r.title} path={r.path} children={r.title} exact={r.exact} />;
							})}
						</Switch>
					</p>
				</Header>
				<Main>
					{isSidebar && (
						<Sidebar>
							<MenuSidebar />
						</Sidebar>
					)}
					<MainContent>
						<Switch>
							{routes.map((r) => {
								return <Route key={r.title} path={r.path} component={r.component} exact={r.exact} />;
							})}
						</Switch>
					</MainContent>
				</Main>
				<Normalize />
				<GlobalStyle />
			</Router>
		</Wrapper>
	);
};

export default App;
