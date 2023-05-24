package main

import (
	"github.com/chamanbravo/tweepy/pkg/routes"
	"github.com/chamanbravo/tweepy/platform/database"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"

	_ "github.com/chamanbravo/tweepy/docs"
)

func main() {
	godotenv.Load(".env")

	database.InitDB()
	defer database.CloseDB()

	app := fiber.New()

	app.Use(logger.New())

	routes.PublicRoute(app)
	routes.SwaggerRoute(app)

	app.Listen(":4000")
}
