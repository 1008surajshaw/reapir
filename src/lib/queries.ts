"use server"
import type { NextApiRequest, NextApiResponse } from 'next'

import { currentUser } from '@clerk/nextjs/server';

import { redirect } from "next/navigation";
import prisma from './db';

export const getAuthDetails = async() =>{
    const user = await currentUser();
    if(!user){
        return;
    }
    console.log(user,"ooooooooooooooooooooo");

}