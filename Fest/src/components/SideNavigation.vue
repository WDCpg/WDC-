<template>
    <nav :class="isDark ? 'dark' : 'light' "  class="side-menu-container " id="side-menu-container">
        <ul>
            <!-- Home -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <g id="House">
                            <path d="M386.002,1154.04l-281.356,1.109l985.146,-944.729l937.152,937.151l-234.457,0.925l-0,823.342l-507.628,0l-0,-529.02l-384.763,-0l0,529.02l-514.094,0l-0,-817.798Z" /></g></svg>
                </div>
                <span>Home</span>
                </a>
                
            </li>
            <!-- Explore -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 1471 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Explore" x="-0" y="-0" width="1470.11" height="2106.64" style="fill:none;"/><path d="M735.054,117.663c370.223,0 670.797,300.574 670.797,670.798c-0,370.223 -670.797,1200.52 -670.797,1200.52c-0,-0 -670.798,-830.297 -670.798,-1200.52c0,-370.224 300.575,-670.798 670.798,-670.798Zm-0.536,307.494c190.443,0 345.058,154.616 345.058,345.059c0,190.443 -154.615,345.058 -345.058,345.058c-190.443,0 -345.058,-154.615 -345.058,-345.058c-0,-190.443 154.615,-345.059 345.058,-345.059Z"/></svg>
                </div>
                <span>Explore</span>
                </a>
            </li>
            <!-- New Event -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><rect id="Add" x="0" y="0" width="2131.59" height="2106.64" style="fill:none;"/><circle cx="1085.24" cy="1066.69" r="1009.91"/>
                        <g id="cross-icon">
                            <path d="M1084.4,676.852l-0,779.669" style="fill:none;stroke-width:167.1px;"/>
                            <path d="M694.568,1066.69l779.669,0" style="fill:none;stroke-width:167.1px;"/>
                        </g>
                    </svg>
                </div>
                <span>New Event</span>
                </a>
            </li>
            <!-- Attending -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Star" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><path d="M1065.8,123.129l300.678,614.549l677.385,96.055l-491.556,475.868l117.969,673.914l-604.476,-320.446l-604.476,320.446l117.969,-673.914l-491.556,-475.868l677.385,-96.055l300.678,-614.549Z" /></svg>
                </div>
                <span>Attending</span>
                </a>
            </li>
            <!-- Calendar -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Calendar" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><g id="Options"><path d="M658.025,602.642c-0,-42.496 35.29,-76.946 79.32,-76.946l1064.67,0c43.808,0 79.32,34.155 79.32,76.946c0,42.496 -35.29,76.945 -79.32,76.945l-1064.67,0c-43.808,0 -79.32,-34.155 -79.32,-76.945Zm-294.501,98.93c-62.556,-0 -113.269,-49.215 -113.269,-109.922c-0,-60.708 50.713,-109.922 113.269,-109.922c62.557,-0 113.27,49.214 113.27,109.922c-0,60.707 -50.713,109.922 -113.27,109.922Zm0,483.656c-62.556,0 -113.269,-49.214 -113.269,-109.922c-0,-60.707 50.713,-109.922 113.269,-109.922c62.557,0 113.27,49.215 113.27,109.922c-0,60.708 -50.713,109.922 -113.27,109.922Zm0,439.688c-62.556,0 -113.269,-49.214 -113.269,-109.922c-0,-60.707 50.713,-109.922 113.269,-109.922c62.557,0 113.27,49.215 113.27,109.922c-0,60.708 -50.713,109.922 -113.27,109.922Zm294.501,-560.602c-0,-42.496 35.29,-76.945 79.32,-76.945l1064.67,-0c43.808,-0 79.32,34.155 79.32,76.945c0,42.496 -35.29,76.946 -79.32,76.946l-1064.67,-0c-43.808,-0 -79.32,-34.155 -79.32,-76.946Zm-0,461.673c-0,-42.496 35.29,-76.946 79.32,-76.946l1064.67,0c43.808,0 79.32,34.155 79.32,76.946c0,42.495 -35.29,76.945 -79.32,76.945l-1064.67,0c-43.808,0 -79.32,-34.155 -79.32,-76.945Z" /></g></svg>
                </div>
                <span>Calendar</span>
                </a>
            </li>
            <!-- My Events -->
            <li>
                <a href="/">
                <div class="side-menu-icon">
                    <svg width="100%" height="100%" viewBox="0 0 2132 2107" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Home" x="0" y="-0" width="2131.59" height="2106.64" style="fill:none;"/><path id="Rocket" d="M1293.7,832.918c-101.972,15.767 -188.528,-71.661 -172.918,-174.632c9.736,-64.191 61.664,-116.642 125.21,-126.481c101.94,-15.767 188.496,71.668 172.885,174.668c-9.736,64.155 -61.631,116.613 -125.177,126.445Zm460.563,-697.592c13.436,75.601 64.389,492.859 -331.816,978.704c-41.444,50.815 -87.529,94.486 -135.367,132.15c-4.317,3.378 -6.33,8.657 -5.259,14.067c14.119,71.235 31.514,214.435 -33.46,296.878c-134.102,170.146 -329.478,212.863 -391.889,222.468c-10.19,1.574 -18.953,-7.113 -17.882,-17.473c-0,-0 26.645,-260.594 32.098,-316.451c0.519,-5.316 -3.96,-9.739 -9.218,-8.989c-30.669,4.235 -77.404,9.867 -90.353,6.821c-19.668,-4.653 -166.394,-127.721 -174.151,-146.606c-5.16,-12.49 -6.621,-59.107 -7.01,-89.2c-0.065,-4.855 -4.641,-8.327 -9.282,-7.08l-312.246,83.17c-8.632,2.291 -17.071,-4.069 -17.168,-13.08c-0.519,-60.424 9.444,-265.712 157.567,-428.085c72.601,-79.562 220.918,-82.22 290.728,-78.611c5.452,0.295 10.32,-2.521 13.014,-7.347c32.811,-58.84 73.412,-116.541 123.619,-168.992c415.776,-434.215 827.851,-462.997 903.373,-464.539c7.335,-0.129 13.436,4.92 14.702,12.195Zm-1019.2,1352.67c23.952,5.675 13.988,73.929 -30.929,125.79c-26.937,31.144 -66.142,55.764 -108.333,66.68c-93.664,24.195 -180.22,9.705 -180.22,9.705c-0,-0 -27.36,-84.613 -18.045,-181.813c4.187,-43.764 22.231,-86.715 48.519,-118.378c43.847,-52.819 109.113,-73.238 118.33,-50.225c15.156,37.893 -30.021,31.404 -48.195,119.753c-14.086,68.384 9.119,99.298 8.698,100.451c0.876,-0.432 34.499,18.061 99.246,-6.497c83.602,-31.728 71.562,-74.744 110.929,-65.466Z"/></svg>
                </div>
                <span>My Events</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
@import "@/styles/SideNavigationStyles.css";
</style>

<script src="@/logic/SideNavigationLogic.js">

</script>
