/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-for-loop */
// Welcome to
// __________         __    __  .__                               __
// \______   \_____ _/  |__/  |_|  |   ____   ______ ____ _____  |  | __ ____
//  |    |  _/\__  \\   __\   __\  | _/ __ \ /  ___//    \\__  \ |  |/ // __ \
//  |    |   \ / __ \|  |  |  | |  |_\  ___/ \___ \|   |  \/ __ \|    <\  ___/
//  |________/(______/__|  |__| |____/\_____>______>___|__(______/__|__\\_____>
//
// This file can be a nice home for your Battlesnake logic and helper functions.
//
// To get you started we've included code to prevent your Battlesnake from moving backwards.
// For more info see docs.battlesnake.com

import runServer from './server.js'
import info from './scriptFolder/info.js'
import end from './scriptFolder/end.js'
import start from './scriptFolder/start.js'
import move from './scriptFolder/move.js'

runServer({
	info: info,
	start: start,
	move: move,
	end: end,
})
