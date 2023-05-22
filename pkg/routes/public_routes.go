package routes

import (
	"github.com/chamanbravo/tweepy/app/controllers"
	"github.com/gofiber/fiber/v2"
)

func PublicRoute(a *fiber.App) {
	route := a.Group("/api")

	route.Post("/signup", controllers.SignUp)
	route.Post("/signin", controllers.SignIn)
	route.Post("/signout", controllers.SignOut)
	route.Post("/refresh-token", controllers.RefreshToken)
}
