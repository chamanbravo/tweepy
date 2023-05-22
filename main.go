package main

import (
	"github.com/chamanbravo/tweepy/pkg/routes"
	"github.com/chamanbravo/tweepy/platform/database"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".env")

	database.InitDB()
	defer database.CloseDB()

	app := fiber.New()

	app.Use(logger.New())
	app.Static("/", "./web/dist")

	routes.PublicRoute(app)

	app.Listen(":4000")
}
