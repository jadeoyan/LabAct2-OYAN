﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class GameHub : Hub
{
    public async Task SendMove(int row, int col, string player)
    {
        await Clients.Others.SendAsync("ReceiveMove", row, col, player);
    }
}
