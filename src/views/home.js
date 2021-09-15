import React, { Component } from 'react';
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';
import {
  addInitListener,
  addContextUpdateListener,
  removeContextUpdateListener,
  removeInitListener
} from '@luigi-project/client';
import './home.css';
import PopupMenu from './PopupMenu';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.initListener = null;
    this.contextUpdateListener = null;
  }

 

  componentDidMount() {
    this.initListener = addInitListener(initialContext => {
      this.setState({
        message: 'Luigi Client initialized.'
      });
    });
    this.contextUpdateListener = addContextUpdateListener(updatedContext => {
      this.setState({
        message: 'Luigi Client updated.'
      });
    });
  }

  componentWillUnmount() {
    removeContextUpdateListener(this.contextUpdateListener);
    removeInitListener(this.initListener);
  }

  render() {
    return (
      <>
      <div class="grid grid-cols-none" id="collapsedtopnav">
  <PopupMenu/>
  

</div>

      <div class="grid container 2xl:gap-x-108   sm:gap-x-18 mr-5 xl:gap-x-108 " id="topnav">
     
      <div class=" flex flex-col">
		<nav class="px-7 pl-1 mr-15 flex justify-between bg-white h-16 border-b-2 2xl: ml-6 xl: mr-6 ">

			<ul class="flex items-center">
				<li class="h-6 w-6">
					<p class="font-mono inline" id="page1text">page 1</p>
				</li>
			</ul>

			<ul class="flex items-center">
				<li>
					<h1 class="pl-8 lg:pl-0 text-gray-700">Svelte</h1>
				</li>
			</ul>

			<ul class="flex items-center">

				<li class="pr-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-bell">
						<path
							d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
						<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
					</svg>

				</li>
				<li class="h-10 w-10">
					<img
						class="h-full w-full rounded-full mx-auto"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt="profile woman" />
				</li>

			</ul>

		</nav>
	</div>
  </div>
     
      <div class="grid grid-cols-2 ">
      <div class="flex flex-col">
  <div class="xs:w-4 sm:w-32 md:w-32 lg:w-24 2xl:w-42" style={{background: "blue"}}>1</div>
  <div style={{background: "darkorange"}}class="xs:w-6 sm:w-24 md:w-8 lg:w-64">2</div>
  <div>3</div>
</div>

<div class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col " id="signincard">
    <div class="mb-4 ">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</div>
</div>
</>



      
    );
  }
}
