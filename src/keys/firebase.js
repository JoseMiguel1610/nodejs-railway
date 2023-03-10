require("dotenv").config()
function exportConfig() {
    const data = {
        "type": "service_account",
        "project_id": process.env.project_id,
        "private_key_id": process.env.private_key_id,
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDS1BZKUWJBk/vv\noyxPCFrymMf9AigYprdzt9BDqjwZnmkPc2iTFPabnZ3V9CIYXY0+4a4iFa1yJX2z\naPMGfzR7144bL9EMfkOfMGBk70zl3nlkuRFQpOkhKU8SVHStFf4jIQRmrOIJ9QF7\nsswF/p1AwC9eMQvFSsImi93fqJi0l57PgaS5YMRkE2yF2mLSA8NoZ/ijVSpAHX/Y\nrMhUMbAl7npE9pgSYH9MIVOdN3wxP8ShTjioxUNMo6dkUHssQXchcqqIGLf4X4Gy\nVqVFLfh0O4CQnOKmK5zF/zkVNXpNsOzlbYI1Wwhnj9xFHRjBVIedsNjowZZgkLpG\nTOGnJLoJAgMBAAECggEAEClyDABxJ9XQWm6H1wcs8awEqMChkkI1jglpTcafFNev\n9h9CxQO2Y/eRQfWVJ4kEau2iC7rdsQJuwHIrLzRRMa00l6DyxaJoTKvIt/QgUP7d\nD3ugeC4sMP6ZsS4IQ7yL3uWJENXv/hNqKbFrMopyQ6R3/SCFZnp0p7/RInQqQK27\nM9TcP44coCt/qs4YHzMuTqoIwuhwVgYUevScY7vtIrkB6gbmpAw61MlAFOd8rsMS\naM/GmNTWj1E1d+VZiyRalPZSPe06k4uOnmmRXFXiAJ1USEqK3jpKM9saWC6EYQy2\npe/7Gzzj1fZyWjxO9+6bP5dt867SndNEImMfHKagAQKBgQD02F/vafNRn4tO7/sD\nc1ZoEm+y/41Cb7OP61uuOUsNe+0QjAm23j6Lk4qIGJUaJVy1nug6h0yokV/QU+o5\n7l14t5pA4n6TnNTrljI8rX6hqnREYVLySkPQG/pIXkYowfjN8m+CuMXcZAQKp3bm\n/EaSjIxwyVtMtmfXRgc0gnP8aQKBgQDcbvnBUIe7am+qTw6CkKYlbtGTP3CBKpVt\nbas5ed2feMZ535wh3mGZ/N16FV6iIro8D1Tm3Tg6UOHDCIK3buo5dGXnzMNJ0kK7\nGujnefcrPzauCdhz/RHDylxEhZDrqDLWQOwCLReqPOhWeQePT8bdg/YPgWX3fdWg\nrL5DKuucoQKBgQCMf8l1UgANG5dOIcmRrlKr/8BXH+wIbp7EfFMsw7W8tBtSPnmo\nlRmg8HYzKKAO09fCZMBwLYmgxWMM4cprmcvLZNhAWXg27m0EDzketpQO4wg64Po/\nDLyjJBrYAjkSVFSYoYC5q5vmnwHutzA01hkNKVfBtNoOSDGIR6gEysMR2QKBgEeR\niGlpWghRcFvdOxrNGASDTGwAZuipCMb0mmkY1gnWzqn3HdwpNYsnfEkM8yK1H74s\nRCaIoJ7eb85Azx/7VPS+g++Unbs0FxJklEXDZaqW5YvwCmTuP3xQEVD2BK1eeNLz\nVS0Hsu1ExTJ+LSQshKabF6LFInQOWPPH4iYwozrBAoGAVFQAQY4CqJ7XFlLEcJED\nPLisehiRI6ZdpJ0F2knZcdMXu3iJANf0zjOmK4g6ajRc2BmPBVm7eS9RZ3l/vW7D\n5MjZ+eT5UJkMu/Kv8cc+i5c6Jt8LHb9D1zXmXdxcJZ7+Rr04VoxOZhj5RCC40WJ5\nZcY7vgMVtAq4D+FcnFCkSxk=\n-----END PRIVATE KEY-----\n",
        "client_email": process.env.client_email,
        "client_id": "112171433906844951406",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3vku9%40nikoletta-3ad28.iam.gserviceaccount.com"
    }
    return data
}

module.exports = exportConfig