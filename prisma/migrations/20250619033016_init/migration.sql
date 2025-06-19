-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "game_started" TIMESTAMP(3) NOT NULL,
    "score" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "targets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "x_min" DOUBLE PRECISION NOT NULL,
    "x_max" DOUBLE PRECISION NOT NULL,
    "y_min" DOUBLE PRECISION NOT NULL,
    "y_max" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "targets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "targets_name_key" ON "targets"("name");
