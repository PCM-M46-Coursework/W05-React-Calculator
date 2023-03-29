export default AppSettings =
{
    development: {
        GH_ROOT: '/'
    },
    production: {
        GH_ROOT: '/{REPO_NAME}'
    },
    routes: [
        { path: "/", page: "LandingPage" }
    ]
};
