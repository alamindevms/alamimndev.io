<template>
	<main class="h-screen w-full flex flex-col justify-between bg-blueGray-800 relative">
		<Header />
		<div class="h-full flex justify-center items-center">
			<input type="text" class="h-10 w-4/12 px-4 text-blueGray-200 bg-blueGray-900 border border-blueGray-600 rounded-md placeholder-blueGray-500 placeholder-opacity-50 focus:outline-none focus:ring-1 focus:ring-blueGray-700 focus:shadow-2xl" placeholder="Search me ( about / portfolio / address )" />
		</div>
		<Footer />
	</main>
</template>

<script>
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
export default {
	name: "App",
	components: {
		Header,
		Footer,
	},
}
</script>
