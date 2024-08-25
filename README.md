# andvygrams



Road Map:
- allow players to customize duration (default: 60s)
- allow players to customize anagram length (default: 6)
- move a lot of client-side calculations onto server
    - currently server is fetching word data from nextjs api
    - server should be setting the timer and word length
- allow for more than 2 players
- fix all the bugs lol
- plenty more things that I will probably think of while I work on the above issues


Bugs To Fix
- when plays disconnect in the middle of the game via refreshing
    - forces players to "ready up" again
    - countdown will restart for the disconnected player but not the other one...
    