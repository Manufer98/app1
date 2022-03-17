import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { RiLightbulbLine } from 'react-icons/ri';
import './Prueba.css';
import { getDataModules } from './services/ModulesService';

class Prueba extends Component {
	state = {
		numberModule: '',
		data: getDataModules(),
		typeModule: '',
	};

	constructor(props) {
		super(props);
	}

	handleModuleNumber = (num) => {
		this.setState({ numberModule: num });
	};

	handleNumberData = (user) => {
		const sep = user.split('');
		if (sep.length === 9) {
			return `User ${sep[3]}`;
		} else {
			return `User ${sep[3] + sep[4]}`;
		}
	};

	handleData = () => {
		const numberModule = this.state.numberModule;
		if (this.state.typeModule === 'Auth Module' && this.state.numberModule !== '') {
			if (numberModule === 1) {
				return this.state.data.auth_module.authn_provider_1;
			} else if (numberModule === 2) {
				return this.state.data.auth_module.authn_provider_2;
			} else if (numberModule === 3) {
				return this.state.data.auth_module.authn_provider_3;
			} else if (numberModule === 4) {
				return this.state.data.auth_module.authn_provider_4;
			}
		} else if (this.state.typeModule === 'Content Module' && this.state.numberModule !== '') {
			if (numberModule === 1) {
				return this.state.data.content_module.authz_provider_1;
			} else if (numberModule === 2) {
				return this.state.data.content_module.authz_provider_2;
			} else if (numberModule === 3) {
				return this.state.data.content_module.authz_provider_3;
			} else if (numberModule === 4) {
				return this.state.data.content_module.authz_provider_4;
			}
		} else {
			return [];
		}
	};

	handleContentModule = () => {
		this.setState({ typeModule: 'Content Module' });
	};
	handleAuthModule = () => {
		this.setState({ typeModule: 'Auth Module' });
	};

	render() {
		return (
			<div>
				<div className="container">
					<button className="btn first" onClick={this.handleContentModule}>
						Content_module
					</button>

					<button className="btn second" onClick={this.handleAuthModule}>
						Auth_module
					</button>
				</div>

				<div className="second-container">
					<div className="container-buttons">
						<button onClick={() => this.handleModuleNumber(1)} className="btn second">
							Module 1
						</button>
						<button onClick={() => this.handleModuleNumber(2)} className="btn first">
							Module 2
						</button>
						<button onClick={() => this.handleModuleNumber(3)} className="btn second">
							Module 3
						</button>
						<button onClick={() => this.handleModuleNumber(4)} className="btn first">
							Module 4
						</button>
					</div>

					<h2 className="numbers">Number of users in module {this.state.numberModule}</h2>
					<div className="users">
						{this.handleData().map((user) => (
							<button onClick={this.realDelete} className="btn second module" key={this.handleNumberData(user)}>
								{this.handleNumberData(user)}
							</button>
						))}
					</div>

					<div className="bottom">
						<button className="btn delete">
							Delete
							<FaTrashAlt size="30px" />
						</button>
						<button className="btn advice">
							Advice
							<RiLightbulbLine size="30px" />
						</button>
						<button className="btn create">
							<HiOutlinePlusCircle size="30px" />
							Create
						</button>
						<button className="btn submit">
							Submit
							<IoIosArrowForward size="30px" />
						</button>
					</div>
					<div>
						<h1 className="type">Type Module: {this.state.typeModule}</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Prueba;
