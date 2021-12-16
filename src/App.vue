<template>
	<main class="h-screen w-full flex flex-col justify-between bg-blueGray-800 relative">
		<transition 
			enter-active-class="transition duration-1000 ease-in-out" 
			enter-from-class="transform scale-95 opacity-0" 
			enter-to-class="transform scale-100 opacity-100" 
			leave-active-class="transition duration-1000 ease-in-out" 
			leave-from-class="transform scale-100 opacity-100" 
			leave-to-class="transform scale-95 opacity-0"
		>
			<div v-if="textAnim">
				<p  class="text-outline absolute top-10 left-5 lg:left-10 text-[4vh] lg:text-[10vh]">About</p>
				<p class="text-outline absolute top-10 right-5 lg:right-10 text-[4vh] lg:text-[10vh]">Project</p>
				<p class="text-outline absolute bottom-10 right-5 lg:right-10 text-[5vh] lg:text-[10vh]">Address</p>
				<div class="text-outline path fixed bottom-0 left-0"></div>
				<div class="text-outline path second fixed bottom-0 left-0"></div>
			</div>
		</transition>
		
		<Header />
		<div class="h-full w-full flex justify-center items-center px-6">
			<input type="text" @change="searchMe($event)" class="h-10 w-80 lg:w-4/12 px-4 text-blueGray-200 bg-blueGray-900 border border-blueGray-600 rounded-md placeholder-blueGray-500 placeholder-opacity-50 focus:outline-none focus:ring-1 focus:ring-blueGray-700 focus:shadow-2xl" placeholder="Search me ( about / portfolio / address )" />
		</div>
		<Footer />
	</main>
	<transition 
		enter-active-class="transition duration-300 ease-out" 
		enter-from-class="transform scale-95 opacity-0" 
		enter-to-class="transform scale-100 opacity-100" 
		leave-active-class="transition duration-200 ease-out" 
		leave-from-class="transform scale-100 opacity-100" 
		leave-to-class="transform scale-95 opacity-0"
	>
		<about v-if="searchValue == 'profile'" @changeModel="cheangePage($event)" />
		<project v-else-if="searchValue == 'project'" @changeModel="cheangePage($event)" />
		<contact v-else-if="searchValue == 'contact'" @changeModel="cheangePage($event)" />
		<not-found v-else-if="searchValue == 'not-found'" @changeModel="cheangePage($event)" />
	</transition>
	
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import About from "./components/about.vue"
import Project from "./components/project.vue"
import Contact from "./components/contact.vue"
import NotFound from "./components/notfound.vue"
export default {
	name: "App",
	components: {
		Header,
		Footer,
		About,
		Project,
		Contact,
		NotFound,
	},
	data() {
		return {
			showMe: null,
			searchValue: null,
			textAnim: null
		}
	},
	mounted(){
		setTimeout((e)=>{
			console.log(e)
			this.textAnim = true
		},500)
	},
	methods: {
		searchMe(event) {
			let searchInput = event.target.value.trim()

			console.log(searchInput)

			if (searchInput == "about" || searchInput == "profile") {
				this.searchValue = "profile"
			} else if (searchInput == "project" || searchInput == "portfolio" || searchInput == "demo") {
				this.searchValue = "project"
			} else if (searchInput == "contact" || searchInput == "address" || searchInput == "chat") {
				this.searchValue = "contact"
			} else {
				this.searchValue = "not-found"
			}

			event.target.value = ""
		},
		cheangePage(value) {
			this.searchValue = value
		},
	},
}
</script>
