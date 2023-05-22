package controllers

import (
	"github.com/chamanbravo/tweepy/app/models"
	"github.com/chamanbravo/tweepy/pkg/utils"
	"github.com/chamanbravo/tweepy/platform/database"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

func RefreshToken(c *fiber.Ctx) error {
	refreshToken := c.Get("refresh_token")
	if refreshToken == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"msg": "refresh token not found",
		})
	}

	payload, _ := utils.VerifyToken(refreshToken)

	username := payload.Username
	coll := database.GetDBCollection("users")

	existingUser := models.User{}

	err := coll.FindOne(c.Context(), bson.M{"username": username}).Decode(&existingUser)
	if err != nil {
		return c.Status(200).JSON(fiber.Map{
			"msg": "user with givern id not found",
		})
	}

	tokens, err := utils.GenerateJWT(existingUser.Username)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	accessToken := fiber.Cookie{
		Name:     "access_token",
		Value:    tokens.AccessToken,
		HTTPOnly: true,
	}

	newRefreshToken := fiber.Cookie{
		Name:     "refresh_token",
		Value:    tokens.RefreshToken,
		HTTPOnly: true,
	}
	c.Cookie(&accessToken)
	c.Cookie(&newRefreshToken)

	return c.JSON(fiber.Map{
		"msg": "refreshed token",
	})
}
