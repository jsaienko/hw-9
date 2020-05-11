import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { fetchFriends, rejectFriendsRequest, confirmFriendsRequest } from '../slices/friendsRequestSlice';

function FriendsPage() {

    return (
        <div>
            <div>Friends page</div>
        </div>
    );
}

export default FriendsPage;
